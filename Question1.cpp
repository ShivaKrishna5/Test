#include <iostream>

using namespace std;

int main()
{
   cout << "Hello World" << endl;
   int Level_Required=7;
   int num_of_spaces;
   for(int i=(-Level_Required)+1;i<=(Level_Required-1);i++)
   {
       num_of_spaces=Level_Required-abs(i);
       for(int k=1;k<=Level_Required;k++)
       {
           if(k<num_of_spaces)
            cout<<" ";
           else
            cout<<k<<" ";
       }
       cout<<endl;
   }
   
   return 0;
}
