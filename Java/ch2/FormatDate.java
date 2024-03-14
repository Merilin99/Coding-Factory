package gr.aueb.cf.ch2;

import java.util.Scanner;

public class FormatDate {
    public static void main(String[] args)
    {
        Scanner input= new
                Scanner(System.in);
        System.out.print("Εισάγετε την ημέρα: ");
        int day= input.nextInt();
        System.out.print("Εισάγετε τον μήνα: ");
        int month= input.nextInt();
        System.out.print("Εισάγετε το έτος: ");
        int year= input.nextInt();

        //*  Χρησιμοποιούμε τον τελεστή %02d για να εξασφαλίσουμε ότι οι αριθμοί θα είναι διψήφιοι.

        String formattedDate=
                String.format ("%02d/%02d/%02d", day, month, year %100 );
        System.out.println("ΗΗ/ΜΜ/ΕΕ: " +formattedDate);








    }


}
