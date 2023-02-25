import { LecteurClefs } from './lireLesClefs.js'
window.addEventListener('load', function(){
   class Game{
     constructor(){
       this.lecteur = new LecteurClefs();
       this.puissance = 0;
       this.min_puissance = 0;
       this.max_puissance = 100;
       this.angle = 45;
       this.min_angle = -90;
       this.max_angle = 90;
     }
     update(){
       // mise à jour de l'angle
       if (this.lecteur.keys.includes('ArrowRight')
           && this.angle < this.max_angle) this.angle++;
       if (this.lecteur.keys.includes('ArrowLeft')
           && this.min_angle < this.angle) this.angle--;
       angle1.innerHTML = this.angle;
       // mise à jour de la puissance
       if (this.lecteur.keys.includes('ArrowUp')
           && this.puissance < this.max_puissance) this.puissance++;
       if (this.lecteur.keys.includes('ArrowDown')
           && this.min_puissance < this.puissance) this.puissance--;
       puissance1.innerHTML = this.puissance;
     }
   }
  const game = new Game();

  function animate(){
    game.update();
    requestAnimationFrame(animate);
  }
  animate();
 });