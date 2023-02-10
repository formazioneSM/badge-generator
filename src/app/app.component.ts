import { Component, ElementRef, inject, NgZone, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { system, secureware, companies } from 'src/constants/companySettings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = '';
  surname:string = '';
  id:string = '';
  ngZone = inject(NgZone);
  companies = companies;
  dropdownOptions=Object.values(companies);
  companyConfiguration = system;
  imgCompany = `../assets/images/${this.companyConfiguration.img}.svg`;
  title = 'badge-generator';
  imageURL:string = '';
  @ViewChild('content') content: ElementRef | undefined = undefined;
  @ViewChild('inputImage') inputImage: ElementRef | undefined = undefined;
  onConfirm() {
    this.exportAllToPDF(this.content?.nativeElement);
}


switchCompany(event:any){
    let name = event.target.value;
    this.companyConfiguration = companies[name];
    this.imgCompany = `../assets/images/${this.companyConfiguration.img}.svg`;
}
  exportAllToPDF(page:any) {
    var w = page.offsetWidth;
    var h = page.offsetHeight;
    const doc =  new jsPDF('p', 'pt', [w, h]);
    html2canvas(page, {scale: 3}).then((canvas:any) => {
      var img = canvas.toDataURL("image/jpeg", 1);
      doc.addImage(img, 'JPEG', 0, 0, w, h);
      doc.save(`${this.name}-${this.surname}.pdf`);
    })  ;
  }
  uploadImage(){
    this.inputImage?.nativeElement.click();
  }
  showPreview(event:any) {
      let file = (event?.target as HTMLInputElement);
      if(file.files?.length && file.files?.length > 0){
          // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      }
      reader.readAsDataURL(file.files[0])
      }
    
    }

  
}
