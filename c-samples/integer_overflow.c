/* integer_overflow.c */
#include <stdlib.h>
#include <string.h>

void int_overflow(size_t n) {
    /* if n is large this can overflow */
    size_t size = n * sizeof(char);
    char *p = malloc(size);
    if (p) memset(p, 0, size);
    free(p);
}

int main(){ int_overflow((size_t)-1); return 0;}
