import { Component, ElementRef, inject, NgZone, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { companies, system } from 'src/constants/companySettings';

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
  imgCompany = `../assets/images/${this.companyConfiguration.img}.png`;
  title = 'badge-generator';
  imageURL:string = '';
  @ViewChild('content') content: ElementRef | undefined = undefined;
  @ViewChild('inputImage') inputImage: ElementRef | undefined = undefined;
  onConfirm() {
    this.exportAllToPDF(this.content?.nativeElement);
}


switchCompany(event:any){
    let name = event.target.value.replaceAll(' ','').toLowerCase();
    this.companyConfiguration = companies[name];
    this.imgCompany = `../assets/images/${this.companyConfiguration.img}.png`;
}
  exportAllToPDF(page:any) {
    var w = page.offsetWidth;
    var h = page.offsetHeight;
    html2canvas(page, {scrollY: -window.scrollY, scale: 3}).then((canvas:any) => {
      const doc =  new jsPDF('p', 'pt', [w, h]);
      var img = canvas.toDataURL("image/jpeg");
      var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
      doc.addImage(img, 'JPEG', 0, 0, width, height);
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
