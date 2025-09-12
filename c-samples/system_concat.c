/* system_concat.c */
#include <stdlib.h>
#include <string.h>

void cmd_exec(const char *name) {
    char cmd[256] = "ls ";
    strncat(cmd, name, sizeof(cmd)-strlen(cmd)-1);
    /* suspicious: building command strings from input */
    system(cmd);
}

int main(){ cmd_exec("somewhere"); return 0;}
