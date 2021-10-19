import math

class Tree:
    def __init__(self, data):
        self.data = data
        self.childs: list[Tree] = []


def MinMax(T: Tree, depth, alpha, beta, isMaximizingPlayer):
    if depth == 0:
        return T.data
    if isMaximizingPlayer:
        best_value = -math.inf
        for child in T.childs:
            eval = MinMax(child, depth-1, alpha, beta, False)
            best_value = max(best_value, eval)
            alpha = max(alpha, eval)
            if beta <= alpha:
                break
            
        return best_value
    else:
        best_value = math.inf
        for child in T.childs:
            eval = MinMax(child, depth-1, alpha, beta, True)
            best_value = min(best_value, eval)
            beta = min(beta, eval)
            if beta <= alpha:
                break
        return best_value


root = Tree(0)
root.childs.append(Tree(0))
root.childs.append(Tree(0))
root.childs[0].childs.append(Tree(1))
root.childs[0].childs.append(Tree(-1))
root.childs[1].childs.append(Tree(0))
root.childs[1].childs.append(Tree(-1))
print(MinMax(root, 1, -math.inf, math.inf, True))