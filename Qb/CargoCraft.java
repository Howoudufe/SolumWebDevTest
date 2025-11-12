import java.util.Scanner;

public class CargoCraft {

    public static class CraftResult{
        long minCraftsNum;
        long maxCraftsNum;
        boolean valid;

        public CraftResult(long minCraftsNum, long maxCraftsNum, boolean valid) {
            this.minCraftsNum = minCraftsNum;
            this.maxCraftsNum = maxCraftsNum;
            this.valid = valid;
        }
        public CraftResult(boolean valid) {
            this.valid = valid;
        }

        @Override
        public String toString() {
            return valid ? (minCraftsNum + " " + maxCraftsNum) : "-1";
        }
    }

    public static CraftResult calculateCraftsNum(long units){
        if(units % 2 != 0){
            return new CraftResult(false);
        }

        long n = units / 2;
        // let a be the amount of crafts Type A, b ... Type B
        // 2a + 3b = n, a = (n - 3b) / 2, craftsNum = a + b = (n - b) / 2. That is, to maximize craftsNum, b should be minimized
        // Given a >= 0, b >= 0, so 0 <= b <= n / 3
        long bMax = n / 3;
        long bMin = 0;
        // Make sure a is valid
        if((n - 3 * bMax) % 2 != 0) bMax --;
        if((n - 3 * bMin) % 2 != 0) bMin ++;

        if(bMax < bMin) return new CraftResult(false);

        long minCraftsNum = (n - 3 * bMax) / 2 + bMax;
        long maxCraftsNum = (n - 3 * bMin) / 2 + bMin;
        return new CraftResult(minCraftsNum, maxCraftsNum, true);
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        long[] unitsArray = new long[num];

        for(int i = 0; i < num; i ++){
            unitsArray[i] = scan.nextLong();
        }

        for(long units : unitsArray){
            CraftResult curResult = calculateCraftsNum(units);
            System.out.println(curResult);
        }

        scan.close();
    }
}
