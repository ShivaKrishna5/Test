#include <iostream>

using namespace std;

int main()
{
   cout << "Hello World" << endl;
   int Level_Required=7; //Level required
   int num_of_spaces;    //spaces required at each level
   for(int i=(-Level_Required)+1;i<=(Level_Required-1);i++) //outer itteration for number of rows
   {
       num_of_spaces=Level_Required-abs(i);                 //condition for printing space or number
       for(int k=1;k<=Level_Required;k++)                  //inner itteration for each row
       {
           if(k<num_of_spaces)
            cout<<" ";                                  //printing space
           else 
            cout<<k<<" ";                               //printing number
       }
       cout<<endl;                                     //printing new line after each row
   }
   
   return 0;
}
