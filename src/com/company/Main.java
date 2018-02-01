package com.company;

public class Main {

    public static void main(String[] args) {


        Fracciones a= new Fracciones(1,2);
        Fracciones b =new Fracciones(3,4);

        Fracciones resul = a.sumar(b);
        resul.mostrar();
    }
}
