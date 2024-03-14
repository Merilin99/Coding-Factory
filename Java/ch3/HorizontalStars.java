package gr.aueb.cf.ch3;

/*
  Εκτυπώνει οριζόντια αστεράκια
 */

import java.util.Scanner;

public class HorizontalStars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Εισαγωγή πλήθους αστεριών: ");
        int n = scanner.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.print("*");
        }

        scanner.close();
    }
}

