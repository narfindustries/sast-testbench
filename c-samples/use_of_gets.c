/* use_of_gets.c */
#include <stdio.h>

void gets_bad(){
    char buf[16];
    gets(buf); /* gets is unsafe / removed from modern libraries */
    printf("%s\n", buf);
}

int main(){ gets_bad(); return 0; }
