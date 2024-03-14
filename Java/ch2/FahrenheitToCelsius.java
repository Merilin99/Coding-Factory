package gr.aueb.cf.ch2;

import java.util.Scanner;

public class FahrenheitToCelsius {
    public static void main(String[] args)
    {
        Scanner input= new
                Scanner(System.in);
        System.out.print("Εισάγετε τη θερμοκρασία σε Φαρενάιτ: " );
                int fahrenheit=
                        input.nextInt();
                int celscius= (int)  (5 * (fahrenheit - 32) /9 );
        System.out.println("Η θερμοκρασία σε Κελσίου είναι: " + celscius + "βαθμοί Κελσίου.");


    }
}
