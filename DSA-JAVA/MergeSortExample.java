public class MergeSortExample {
    // Function to merge two sorted halves
    public static void conquer(int[] arr, int si, int mid, int ei) {
        int[] merged = new int[ei - si + 1];
        int idx1 = si;
        int idx2 = mid + 1;
        int x = 0;
        // Merge both halves into merged[]
        while (idx1 <= mid && idx2 <= ei) {
            if (arr[idx1] <= arr[idx2]) {
                merged[x++] = arr[idx1++];
            } else {
                merged[x++] = arr[idx2++];
            }
        }
        // Copy remaining elements of left half
        while (idx1 <= mid) {
            merged[x++] = arr[idx1++];
        }
        // Copy remaining elements of right half
        while (idx2 <= ei) {
            merged[x++] = arr[idx2++];
        }
        // Copy merged array back into original array
        for (int i = 0, j = si; i < merged.length; i++, j++) {
            arr[j] = merged[i];
        }
    }
    // Function to recursively divide the array
    public static void divide(int[] arr, int si, int ei) {
        if (si >= ei) {
            return;
        }
        int mid = si + (ei - si) / 2;
        // Recursively divide left and right halves
        divide(arr, si, mid);
        divide(arr, mid + 1, ei);
        // Merge the two halves
        conquer(arr, si, mid, ei);
    }
    // Main function
    public static void main(String[] args) {
        int[] arr = { 5, 2, 8, 1, 3 };
        System.out.println("Original Array:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
        // Apply merge sort
        divide(arr, 0, arr.length - 1);
        System.out.println("Sorted Array:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}