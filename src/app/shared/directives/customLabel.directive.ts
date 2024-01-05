import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective { 

  private htmlelement?:ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;
  

  constructor(private el:ElementRef<HTMLElement>){
    console.log("Constructor directiva");
    console.log(el);
    this.htmlelement = el;

    this.htmlelement.nativeElement.innerHTML = "Hola mundo";
    
  }

  @Input() set color (value:string){
    this._color = value;
    this.setStyle();
    
  }

  @Input() set errors(value:ValidationErrors| null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }

  setStyle():void{
    if( !this.htmlelement ) return;
    this.htmlelement!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void{
    if(!this.htmlelement) return;
    if(!this._errors){
      this.htmlelement.nativeElement.innerHTML = "No hay errores";
      return;
    }

    const errors = Object.keys(this._errors);

    if(errors.includes('required')){
      this.htmlelement.nativeElement.innerHTML = "Este campo es requerido";
      return;
    }

    if(errors.includes('minlength')){
      const min = this._errors['minlength']['requiredLength']
      const current = this._errors['minlength']['actualLength']
      this.htmlelement.nativeElement.innerHTML = `Mínimo ${current}/${min} caracteres.`;
      return;
    }

    if(errors.includes('email')){
      this.htmlelement.nativeElement.innerHTML = "Formato incorrecto.";
      return;
    }
  }
}
