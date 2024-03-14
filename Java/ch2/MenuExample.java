package gr.aueb.cf.ch2;

import java.util.Scanner;

public class MenuExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;

        do {
            System.out.println("Μενού:");
            System.out.println("1. Εισαγωγή");
            System.out.println("2.Διαγραφή");
            System.out.println("3.Ενημέρωση");
            System.out.println("4.Αναζήτηση");
            System.out.println("5.Έξοδος");
            System.out.println("6.Επιλέξτε μια επιλογή");
            choice = scanner.nextInt();

            switch (choice) {

                case 1:
                    System.out.println("Επιλέξατε Εισαγωγή.");
                    break;
                case 2:
                    System.out.println("Επιλέξατε Διαγραφή.");
                    break;
                case 3:
                    System.out.println("Επιλέξατε Ενημέρωση.");
                    break;
                case 4:
                    System.out.println("Επιλέξατε Αναζήτηση.");
                    break;
                case 5:
                    System.out.println("Επιλέξατε Έξοδος. Το πρόγραμμα τερματίζεται.");
                    break;
                default:
                    System.out.println("Μη έγκυρη επιλογή. Παρακαλώ δώστε έγκυρο αριθμό.");
            }
        }    while (choice !=5);
        scanner.close();
    }
}
