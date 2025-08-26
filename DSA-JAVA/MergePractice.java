import java.util.*;
public class MergePractice {
    public static void conquer(int[] arr, int si, int mid, int ei){
        int idx1=si;
        int idx2=mid+1;
        int x=0;
        int[] mergedArray = new int[ei-si+1];
        while(idx1<= mid && idx2<=ei){
            if(arr[idx1]<=arr[idx2]){
                mergedArray[x++]=arr[idx1++];
            } else{
                mergedArray[x++]=arr[idx2++];
            }
        }
        while (idx1<=mid) {
            mergedArray[x++]=arr[idx1++];
        }
        while(idx2<=ei){
            mergedArray[x++]=arr[idx2++];
        }
        for(int i=0, j=si; i< mergedArray.length; i++,j++){
            arr[j]=mergedArray[i];
        }
    }
    public static void divide(int[] arr, int si, int ei){
        if(si>=ei) return;
        int mid = si + (ei-si)/2;
        divide(arr, si, mid);
        divide(arr, mid+1, ei);
        conquer(arr, si, mid, ei);
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of the array");
        int n=sc.nextInt();
        sc.nextLine();
        int[] arr = new int[n];
        System.out.printf("Enter elements of the array sized %d separated by single space to be sorted!%n", n);
        String inp = sc.nextLine();
        String[] input = inp.split(" ");
        for(int i=0;i<n;i++){
            arr[i]=Integer.parseInt(input[i]);
        }
        divide(arr,0,n-1);
        System.out.print("Sorted array -> ");
        for(int num:arr){
            System.out.print(num + " ");
        }
        sc.close();
    }
}
