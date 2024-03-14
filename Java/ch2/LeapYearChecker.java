package gr.aueb.cf.ch2;

import java.util.Scanner;

public class LeapYearChecker {
    public static void main(String[] args)
    {
        Scanner scanner= new
                Scanner(System.in);
        System.out.print("Εισάγετε ένα έτος: ");
        int year= scanner.nextInt();

        if ((year % 4 == 0 && year % 100 !=0) || (year % 400 ==0)) {
            System.out.println(year + "Είναι δίσεκτο έτος.");
    } else {
            System.out.println(year + "Δεν είναι δίσεκτο έτος.");
}
 scanner.close();
}
}