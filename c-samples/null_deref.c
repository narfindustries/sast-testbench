/* null_deref.c */
#include <stdlib.h>

int deref_bad(int cond) {
    int *p = NULL;
    if (cond) p = malloc(sizeof(int));
    /* use p without checking on false branch */
    return *p + 1;
}
int main(){ deref_bad(0); return 0;}
