/* strcpy_overflow.c */
#include <stdio.h>
#include <string.h>

void overflow_example() {
    char src[100] = "a very long string that will overflow";
    char dst[10];
    /* Intentionally unsafe to trigger strcpy detection */
    strcpy(dst, src);
    printf("%s\n", dst);
}

int main(){ overflow_example(); return 0;}
