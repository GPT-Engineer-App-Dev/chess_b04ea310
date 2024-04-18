import React, { useState } from "react";
import { Box, Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from "react-icons/fa";

const ChessBoard = () => {
  const [board, setBoard] = useState([
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
  ]);

  const getPieceIcon = (piece) => {
    switch (piece[1]) {
      case "p":
        return <FaChessPawn />;
      case "r":
        return <FaChessRook />;
      case "n":
        return <FaChessKnight />;
      case "b":
        return <FaChessBishop />;
      case "q":
        return <FaChessQueen />;
      case "k":
        return <FaChessKing />;
      default:
        return null;
    }
  };

  return (
    <Grid templateColumns="repeat(8, 1fr)" gap={0} width="400px" margin="auto">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => (
          <GridItem key={`${rowIndex}-${colIndex}`} bg={(rowIndex + colIndex) % 2 === 0 ? "gray.100" : "gray.400"} height="50px" display="flex" alignItems="center" justifyContent="center" fontSize="2xl" color={piece[0] === "w" ? "white" : "black"}>
            {getPieceIcon(piece)}
          </GridItem>
        )),
      )}
    </Grid>
  );
};

const Index = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Chess Game</Heading>
      <ChessBoard />
      <Button mt={4}>New Game</Button>
    </Box>
  );
};

export default Index;
