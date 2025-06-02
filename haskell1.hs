--Zadanie 2
square :: Num a => a -> a
square x = x * x

cube :: Num a => a -> a
cube x = x * square x

avg :: Fractional a => a -> a -> a
avg x y = (x + y) / 2

--Zadanie 3
quad :: (Floating a, Ord a, Show a) => a -> a -> a -> String
quad a b c =
    let delta = b*b - 4 * a * c
    in if delta < 0 then
    "Brak pierwiastkow rzeczywistych"
                    else if delta == 0 then
                    let x = -b / (2 * a)
                    in "Jedno rozwiazanie: x = " ++ show x
                                       else
                                       let x1 = (-b - sqrt delta) / (2 * a)
                                           x2 = (-b + sqrt delta) / (2 * a)
                                       in "Dwa rozwiazania: x1 = " ++ show x1 ++ " x2 = " ++ show x2

                                       -- zadanie 4
                                       silnia :: (Eq a, Num a) => a -> a
                                       silnia 0 = 1
                                       silnia n = n * silnia (n-1)

                                       -- zadanie 5
                                       fib :: Integer -> Integer
                                       fib 0 = 0
                                       fib 1 = 1
                                       fib x = fib (x - 1) + fib (x - 2)

                                       -- zadanie 6
                                       minmax :: (Ord a, Num a) => a -> a -> a -> a
                                       minmax x y z =  maximum [x, y, z] - minimum [x, y, z]

                                       -- zadanie 7
                                       sumOfSquares :: Num a => a -> a -> a
                                       sumOfSquares x y = square x + square y

                                       -- zadanie 8
                                       lastDigit :: Integral a => a -> a
                                       lastDigit x = mod (abs x) 10

                                       main :: IO ()
                                       main = do
                                           putStrLn $ "Kwadrat 5 = " ++ show (square 5)
                                           putStrLn $ "Szescian 3 = " ++ show (cube 3)
                                           putStrLn $ "Srednia 5 8 = " ++ show (avg 5 8)
                                           let a = 1
                                           b = -3
                                           c = 2
                                           putStrLn $ "Rozwiazanie dla a=1, b=-3, c=2:"
                                           putStrLn (quad a b c)
                                           putStrLn $ "Silnia = " ++ show (silnia 5)
                                           putStrLn $ "Fib 8 = " ++ show (fib 8)
                                           putStrLn $ "Roznica min max = " ++ show (minmax 7 1 4)
                                           putStrLn $ "Suma kwadratow = " ++ show (sumOfSquares 3 4)
                                           putStrLn $ "Ostatnia cyfra = " ++ show (lastDigit 42)
                                           putStrLn $ "Ostatnia cyfra = " ++ show (lastDigit (-17))
