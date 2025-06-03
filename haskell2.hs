--zadanie 3
revnew :: [a] -> [a]
revnew [] = []
revnew (x : xs) = revnew xs ++ [x]


--zadanie 4
multTab :: [(Int, Int, Int)]
multTab = [(a, b, a*b) | a <- [1..12], b <- [1..12]]


-- zadanie 5
colorPairs :: [(String, String)]
colorPairs = [(c1, c2) | c1 <- colors, c2 <- colors, c1 < c2]
  where colors = ["black", "white", "blue", "yellow", "red"]


--zadanie 6
append :: [a] -> [a] -> [a]
append [] ys = ys
append (x : xs) ys = x : append xs ys

member :: Eq a => a -> [a] -> Bool
member _ [] = False
member x (y : ys)
  | y == x  = True
  | otherwise = member x ys
  
lastE :: [a] -> a
lastE [x] = x
lastE (x : xs) = lastE xs

delete :: Eq a => a -> [a] -> [a]
delete _ [] = []
delete x (y:ys)
  | x == y  =ys
  | otherwise = y : delete x ys  -- : to operator dodawania elementu na początek listy

split :: Ord a => a -> [a] -> ([a], [a])
split _ [] = ([], [])
split x (y:ys)
  | x > y = (y : l1, l2)
  | x < y = (l1, y : l2)
  | otherwise = (l1, l2)
  where (l1, l2) = split x ys


-- zadanie 7
filterF :: (a -> Bool) -> [a] -> [a]
filterF _ [] = []
filterF p (x : xs)
  | p x = x : filterF p xs
  | otherwise = filterF p xs


-- zadanie 8
onlyEven :: [Int] -> [Int]
onlyEven l = filter (\x -> x `mod` 2 == 0) l


-- zadanie 9
doubleAll :: [Int] -> [Int]
doubleAll l = map (* 2) l


-- zadanie 10
sumOfDigits :: Integer -> Integer
sumOfDigits n
  | n < 0     = sumOfDigits (abs n)
  | n < 10    = n
  | otherwise = (mod n 10) + sumOfDigits (div n 10)



main :: IO()
main = do

  --zadanie 3
  let lista = [1, 2, 3, 4, 5]
  putStrLn $ "Odwrocona lista: " ++ show (revnew lista)
  
  -- zadanie 4
  let table = multTab
  putStrLn $ "Tablica mnozenia: "
  mapM_ print table
  
  -- zadanie 5
  putStrLn $ "Kolory " 
  mapM_ print colorPairs
  
  -- zadanie 6
  let l1 = [1, 3, 5]
  let l2 = [2, 4, -1, 6, 7, 8, -6, 9]
  putStrLn $ "Append: " ++ show (append l1 l2)
  putStrLn $ "Member: " ++ show (member 4 l2)
  putStrLn $ "Last: " ++ show (member 4 l2)
  putStrLn $ "Deleted: " ++ show (delete 6 l2)
  putStrLn $ "Split: " ++ show (split 5 l2)
  
  -- zadanie 7
  putStrLn $ "Filter: " ++ show (filterF ( > 0) l2)
  -- zadanie 8
  putStrLn $ "Only Even: " ++ show (onlyEven l2)
  -- zadanie 9
  putStrLn $ "Double all" ++ show (doubleAll l1)
  -- zadanie 10
  putStrLn $ "Suma liczb " ++ show (sumOfDigits 3278)
  
  
  