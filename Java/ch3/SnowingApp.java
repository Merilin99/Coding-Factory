package gr.aueb.cf.ch3;


import java.util.Scanner;

/**
 * Διαβάζει μια θερμοκρασίας και ένα boolean
 * για το αν βρέχει, από το stdin και
 * αποφασίζει εαν χιονίζει.
 */
public class SnowingApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int temp = 0;
        boolean isRaining = false;
        boolean isSnowing = false;

        System.out.println("Please insert temp");
        temp = scanner.nextInt();
        System.out.println("Please insert if is raining (true/False");
        isRaining = scanner.nextBoolean();

        isSnowing = isRaining && (temp < 0);

        System.out.println("Is snowing: " + isSnowing);

    }
}
