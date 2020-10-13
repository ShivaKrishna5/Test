#include <iostream>
#include<string>
using namespace std;

int main()
{
   string str1 = "XYYZXZYZXXYZ"; // main string
   string str2 = "XYZ";          // substring
   string temp1;                 // maintaing temp strings
   string temp2=str2;
   string temp3=temp1;
   int len1=str1.length();      // noting lengths of the string
   int len2=str2.length();
   for(int i=0;i<len1;i++)                            //itterating through main string
   {
       if(i+len2<=len1)                               // making sure we are within string
       { 
           temp1=str1.substr(i,len2);                  //taking substring of main string
           temp3=temp1;                                // saving it to temp3
           sort(temp1.begin(),temp1.end());             //soring the characters in temp1
           sort(temp2.begin(),temp2.end());             // sorting the charaters in temp2
           if(temp1.compare(temp2)==0)                  // checking if both are same
           cout<<temp3<<" found at index "<<i<<endl;      // printing the result if same.
       }
       else
       break;                                         // breaking loop if the considered substring length is more than main string
   }
   
  

   return 0;
}
