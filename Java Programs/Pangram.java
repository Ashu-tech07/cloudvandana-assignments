public class Pangram {
    public static void main(String[] args) {
        String inputString = "The quick brown fox jumps over the lazy dog";
        boolean[] mark = new boolean[26];
        int index;
        for (int i = 0; i < inputString.length(); i++) {
            if ('A' <= inputString.charAt(i) && inputString.charAt(i) <= 'Z') {
                index = inputString.charAt(i) - 'A';
            } else if ('a' <= inputString.charAt(i) && inputString.charAt(i) <= 'z') {
                index = inputString.charAt(i) - 'a';
            } else {
                continue;
            }
            mark[index] = true;
        }
        boolean pangramCheck = true;
        for (int i = 0; i <= 25; i++) {
            if (!mark[i]) {
                pangramCheck = false;
                break;
            }
        }
        if (pangramCheck) {
            System.out.println("The given string is a pangram.");
        } else {
            System.out.println("The given string is not a pangram.");
        }
    }
}
