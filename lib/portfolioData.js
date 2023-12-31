import cakeData from "../portfolioData/cakeData";
import printIllustrationData from "../portfolioData/printIllustrationData";
import graphicDesignData from "@/portfolioData/graphicDesignData";

export async function getCakeData(id) {
  // find the cake by id and return an object with the corresponding data
  for (let i = 0; i < cakeData.length; i++) {
    if (id === cakeData[i].id.toString()) {
      return {
        id: cakeData[i].id,
        img: cakeData[i].img,
        name: cakeData[i].name,
        caption: cakeData[i].caption,
        alt: cakeData[i].alt,
        width: cakeData[i].width,
        height: cakeData[i].height,
      };
    }
  }
}

export async function getPrintIllustrationData(id) {
  // find the print illustration by id and return an object with the corresponding data
  for (let i = 0; i < printIllustrationData.length; i++) {
    if (id === printIllustrationData[i].id.toString()) {
      return {
        id: printIllustrationData[i].id,
        img: printIllustrationData[i].img,
        name: printIllustrationData[i].name,
        caption: printIllustrationData[i].caption,
        alt: printIllustrationData[i].alt,
        orientation: printIllustrationData[i].orientation,
      };
    }
  }
}

export async function getGraphicDesignData(id) {
  // find the graphic design piece by id and return an object with the corresponding data
  for (let i = 0; i < graphicDesignData.length; i++) {
    if (id === graphicDesignData[i].id.toString()) {
      return {
        id: graphicDesignData[i].id,
        img: graphicDesignData[i].img,
        name: graphicDesignData[i].name,
        caption: graphicDesignData[i].caption,
        alt: graphicDesignData[i].alt,
        orientation: graphicDesignData[i].orientation,
      };
    }
  }
}
