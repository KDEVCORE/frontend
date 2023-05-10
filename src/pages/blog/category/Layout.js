import { Box } from "@mui/material";
import CategoryAdd from "./Add";
import CategoryList from "./List";

export default function Layout() {
    return (
        <Box>
            <CategoryAdd />
            <CategoryList />
        </Box>
    );
}