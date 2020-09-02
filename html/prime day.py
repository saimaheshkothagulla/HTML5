d,p=[int(x) for x in input().split()]
c=0;
part=d//p
def prime(i):
    for j in range(2,int(i/2)+1):
        if(i%j==0):
            return 0
    return 1

for i in range(2,part):
    if(prime(i)):
        count=1
        for j in range(i,d,part):
            if(prime(j)==0):
                count=0
                break
        if(count==1):
            c+=1
print(c)


