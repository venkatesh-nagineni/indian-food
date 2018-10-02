import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

/*   @ViewChild('videoPlayer') videoplayer: any;
 */
  constructor(private domSanitizer: DomSanitizer) {
  }

 /*  getVideoTag() {
    return this.domSanitizer.bypassSecurityTrustHtml(
      `<video loop muted autoplay>
        <source src="../assets/video/background_video.mp4" type="video/mp4" />
      </video>
      <div class="container h-100">
        <div class="d-flex text-center h-100">
          <div class="my-auto w-100 text-white">
            <h1 class="display-3">Namasthe</h1>
            <h2>MITTAGSMENÜ alle gerichte (Abholung nur 5,90 / Lieferung nur 6,50)</h2>
          </div>
        </div>
      </div>`
    );
  } */
}

