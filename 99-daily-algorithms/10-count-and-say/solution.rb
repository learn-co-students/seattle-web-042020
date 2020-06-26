# Wheatley

def countandsay(n)
    i=0
    output=[]
    while i < n
        if i != 0
            working = output.join().split('')
            output = []
        else
            working = ["1"]
        end
        j = 0
        k = 0
        while k <= working.length
            if working[j] != working[k]
                output.push((k-j).to_s + working[j])
                j = k
            end
            k += 1
        end
        i +=1
    end
    output.join()
end
puts countandsay(8)