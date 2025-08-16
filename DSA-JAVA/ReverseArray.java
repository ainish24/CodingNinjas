import java.util.*;
public class ReverseArray{
    public static void main(String[] args){
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter the size of the array");
        int n = sc.nextInt();
        sc.nextLine();
        int[] arr=new int[n];
        System.out.printf("Enter %d sized array elements%n", n);
        String inp=sc.nextLine();
        String[] input = inp.split(" ");
        for(int i =0;i<n;i++){
            arr[i]=Integer.parseInt(input[i]);
        }
        int i=0;
        int j=n-1;
        while(i<j){
            int temp = arr[i];
            arr[i]=arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        System.out.println("Reversed Array");
        for(int num:arr){
            System.out.print(num+" ");
        }
        sc.close();
    }
}