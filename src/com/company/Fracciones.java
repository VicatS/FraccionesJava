package com.company;

public class Fracciones {
    int numerador;
    int denominador;

    public Fracciones(int numerador, int denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    public Fracciones sumar(Fracciones a) {
        int cont1 = (a.numerador * this.denominador) + (a.denominador * this.numerador);
        int cont2 = this.denominador * a.denominador;

        Fracciones f = new Fracciones(cont1, cont2);
        return f;
    }

    public void mostrar() {
        System.out.println(numerador + "/" + denominador);
    }

    public Fracciones restar(Fracciones a){
        int cont1 = (a.denominador * this.numerador)-(a.numerador * this.denominador);
        int cont2 = this.denominador * a.denominador;

        Fracciones f = new Fracciones(cont1, cont2);
        return f;
}


}


