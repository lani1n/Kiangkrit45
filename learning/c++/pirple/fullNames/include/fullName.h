#ifndef FULLNAME_H
#define FULLNAME_H

#include "enhancedStrings.h"

class fullName : public enhancedStrings
{
    public:
        fullName(std::string value);
        virtual ~fullName();
        void displayInfo();
    protected:
    private:
};

#endif // FULLNAME_H
