/* double_free.c */
#include <stdlib.h>

void double_free() {
    char *p = malloc(10);
    free(p);
    free(p); /* double free */
}

int main(){ double_free(); return 0;}
