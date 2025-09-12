/* tainted_printf.c */
#include <stdio.h>
#include <string.h>

void tainted() {
    char user[64];
    strcpy(user, "%x %x %x"); /* simulated attacker input */
    printf(user); /* tainted format */
}

int main(){ tainted(); return 0; }
