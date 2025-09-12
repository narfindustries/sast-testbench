/* unchecked_return.c */
#include <stdlib.h>
#include <stdio.h>

void unchecked() {
    char *p = malloc(1024); /* not checking */
    FILE *f = fopen("nonexistent_file.txt", "r"); /* not checking */
    /* use them without checking for NULL */
    p[0] = 'x';
    fclose(f);
    free(p);
}

int main(){ unchecked(); return 0; }
