import java.util.*;
public class BinarySearch{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the length of array");
        int n = sc.nextInt();
        sc.nextLine();
        System.out.printf("Enter %d sized array elements in sorted manner%n", n);
        String elems=sc.nextLine();
        String[] arr=elems.split(" ");
        int[] input = new int[n];
        for(int i=0; i<n;i++){
            input[i]=Integer.parseInt(arr[i]);
        }
        int low=0;
        int high=n-1;
        System.out.println("Enter element to be searched");
        int target = sc.nextInt();
        boolean found=false;
        while(low<=high){
            int mid=(low+high)/2;
            if (target==input[mid]) {
                System.out.printf("Element found at %d index", mid);
                found=true;
                break;
            }
            if(target<input[mid]){
                high=mid-1;
            }else{
                low=mid+1;
            }
        }
        if(!found){
            System.out.println("Element not found!");
        }
        sc.close();
    }
}