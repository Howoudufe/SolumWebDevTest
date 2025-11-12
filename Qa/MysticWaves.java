import java.util.Scanner;

public class MysticWaves {

    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        int[] results = new int[num];

        for(int i = 0; i < num; i ++){
            int x = scan.nextInt();
            int n = scan.nextInt();

            results[i] = countEnergy(x, n);
        }
        for(int res : results){
            System.out.println(res);
        }
        scan.close();
    }

    public static int countEnergy(int x, int n){
        return (n % 2 == 0) ? 0 : x;
    }
}
