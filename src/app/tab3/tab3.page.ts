import { Component,  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  titulo: string | undefined;
  descripcion: string | undefined;
  imageElement: any;
  currentDate: string = new Date().toISOString();
  
  constructor(private navCtrl: NavController, private router: Router, ) {
    this.currentDate = new Date().toLocaleDateString();
   }

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)

    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  goToTab1() {
    // Redirige al Tab1
    this.router.navigate(['/tabs/tab1']);
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    var imageUrl = image.webPath;
    this.imageElement= imageUrl;
    
    
  }

  saveImage() {
    const navigationExtras: NavigationExtras = {
      state: {
        title: this.titulo,
        description: this.descripcion,
        currentDate: this.currentDate,
        imageSrc : this.imageElement
      },
    };
  
    this.router.navigate(['/tabs/tab1'], navigationExtras);
  }
  submitForm() {
    // Enviar datos del formulario a tab1
    const formData = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.currentDate,
      imageSrc : this.imageElement
    };
    const navigationExtras = {
      state: formData
    };

  }

  
}
