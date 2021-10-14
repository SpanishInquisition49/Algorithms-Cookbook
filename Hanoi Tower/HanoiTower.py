def hanoi(pegs, start, target, n):
    assert len(pegs[start]) >= n, 'not enough disks on peg'
    if n == 1:
        pegs[target].append(pegs[start].pop())
        print ('%i -> %i: %s' % (start, target, pegs))
    else:
        aux = 3 - start - target  # start + target + aux = 3
        hanoi(pegs, start, aux, n-1)
        hanoi(pegs, start, target, 1)
        hanoi(pegs, aux, target, n-1)

pegs = [[7,6,5,4, 3, 2, 1], [], []]
hanoi(pegs, 0, 1, 4)    