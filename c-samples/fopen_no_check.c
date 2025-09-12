/* fopen_no_check.c */
#include <stdio.h>

void open_bad() {
    FILE *f = fopen("noexist", "r");
    /* no NULL check before using f */
    fseek(f, 0, SEEK_SET);
    fclose(f);
}

int main(){ open_bad(); return 0; }
