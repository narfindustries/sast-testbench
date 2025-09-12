/* format_string.c */
#include <stdio.h>

void fmt_bad(const char *user) {
    /* using user input directly as format */
    printf(user);
}

int main(){
    fmt_bad("%s %s"); /* just a call that looks bad to static analyzers */
    return 0;
}
