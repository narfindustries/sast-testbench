// unsafe_casts.cpp
#include <iostream>
#include <cstdint>

void cast_bad() {
    int a = 0x41424344;
    char *p = reinterpret_cast<char*>(&a);
    // reading with different alignment/types may be suspicious
    std::cout << p[0] << std::endl;
}

int main(){ cast_bad(); return 0; }
