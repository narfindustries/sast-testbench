/* dangling_ptr.c */
#include <stdlib.h>
#include <string.h>

char *get_bad() {
    char *p = malloc(16);
    strcpy(p, "hello");
    free(p);
    return p; /* returning freed pointer */
}

int main(){
    char *s = get_bad();
    /* use-after-free */
    return s[0];
}
