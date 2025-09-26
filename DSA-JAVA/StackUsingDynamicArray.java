class DynamicArray{
    private int[] arr=new int[10];
    private int index=0;
    public void createSpace(){
        int size = arr.length;
        int newSize = size*2;
        int[] newArr=new int[newSize];
        System.arraycopy(arr,0,newArr,0, arr.length);
        arr=newArr;
    }
    public void add(int element){
        if(index>=arr.length){
        createSpace();
        }
        arr[index++]=element;
    }
    public int get(int idx){
        if (idx < 0 || idx >= index) throw new IndexOutOfBoundsException();
        return arr[idx];
    }
    public void set(int idx, int el){
        if (idx < 0 || idx >= index) throw new IndexOutOfBoundsException();
        arr[idx] = el;
    }
    public int size(){
        return index;
    }
    public void remove(int idx){
        if (idx < 0 || idx >= index) return;
        for(int i=idx;i<index-1;i++){
            arr[i]=arr[i+1];
        }
        arr[index-1]=0;
        index--;
    }
    
}

class StackArr{
    DynamicArray arr = new DynamicArray();
    public int getSize(){
        return arr.size();
    }
    public boolean isEmpty(){
        return arr.size()==0;
    }
    public void push(int element){
        arr.add(element);
    }
    public int pop(){
        if(isEmpty()) return -1;
        int temp = arr.get(arr.size()-1);
        arr.remove(arr.size()-1);
        return temp;
    }
    public int top(){
        if(isEmpty()) return -1;
        return arr.get(arr.size()-1);
    }
}

public class StackUsingDynamicArray {
    public static void main(String[] args){
        //will add later
    }
}
