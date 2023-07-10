import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {
  @ViewChild('profilePicture', { static: false }) profilePictureRef!: ElementRef;
  @ViewChild('description', { static: false }) descriptionRef!: ElementRef;
  @ViewChild('fotoperfil', { static: false }) fotoPerfilRef!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const profilePicture = this.profilePictureRef.nativeElement;
    const description = this.descriptionRef.nativeElement;
    const fotoPerfil = this.fotoPerfilRef.nativeElement;

    // Configura la animación para mostrar la descripción y la foto de perfil gradualmente
    description.style.transform = 'translateX(-100%)';
    fotoPerfil.style.transform = 'translateX(100%)';

    let opacity = 0;
    const increment = 0.01;
    const animationDuration = 500; // Duración de la animación en milisegundos

    const animateBanner = () => {
      opacity += increment;
      description.style.opacity = opacity.toString();
      fotoPerfil.style.opacity = opacity.toString();

      // Animación de desplazamiento hacia el centro
      const descriptionTranslateX = (1 - opacity) * -100;
      const fotoPerfilTranslateX = (1 - opacity) * 100;
      description.style.transform = `translateX(${descriptionTranslateX}%)`;
      fotoPerfil.style.transform = `translateX(${fotoPerfilTranslateX}%)`;

      if (opacity < 1) {
        requestAnimationFrame(animateBanner);
      }
    };

    setTimeout(() => {
      animateBanner();
    }, animationDuration);
  }
}
