import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react";

interface GlassCardProps {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  children?: React.ReactNode;
  cardClass?: string;
  headerClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  contentClass?: string;
  footerClass?: string;
}


const GlassCard: React.FC<GlassCardProps> = ({
  children,
  title = "",
  description = "",
  content = "",
  footer = "",
  cardClass = "",
  headerClass = "",
  titleClass = "",
  descriptionClass = "",
  contentClass = "",
  footerClass = ""
}) => {
  return (
    <Card className={`mx-auto p-2 bg-white bg-opacity-10 backdrop-blur-lg dark:backdrop-blur-[35px] rounded-lg shadow-[inset_0px_0px_20px_2px_#ffffff] ${cardClass}`}>
      <CardHeader className={`flex flex-col items-center text-center p-0 gap-0 ${headerClass}`}>
        <CardTitle className={`text-2xl font-bold text-primary ${titleClass}`}>{title}</CardTitle>
        <CardDescription className={`${descriptionClass}`} >{description}</CardDescription>
      </CardHeader>
      <CardContent className={`px-2 text-justify italic text-primary ${contentClass}`}>{content}</CardContent>
      <CardFooter className={`px-2 grid justify-items-center items-center ${footerClass}`}>
        {footer}
        {children}
      </CardFooter>
    </Card>
  );
}

export default GlassCard;