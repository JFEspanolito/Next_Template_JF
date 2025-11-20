"use client";

import config from "@/config";
import ButtonBasic from "@/components/buttons/ButtonBasic";
import ThemeToggle from "@/components/buttons/ThemeToggle";
import { TextSpotlight } from "@/components/ui/text-spotlight";
import StylishDock from "@/components/ui/magicdock";
import {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
  CardFlipHeader,
  CardFlipFooter,
  CardFlipTitle,
  CardFlipDescription,
  CardFlipContent,
  CardFlipAction,
} from "@/components/ui/card-flip";
import {
  Home as HomeIcon,
  FileText as FileTextIcon,
  Download as DownloadIcon,
  Code as CodeIcon,
  BookOpen as BookOpenIcon,
} from "lucide-react";

const dockItems = [
  {
    id: 1,
    icon: <HomeIcon />,
    label: "Home",
    onClick: () => console.log("Home"),
  },
  {
    id: 2,
    icon: <FileTextIcon />,
    label: "Docs",
    onClick: () => console.log("Docs"),
  },
  {
    id: 3,
    icon: <DownloadIcon />,
    label: "Download",
    onClick: () => console.log("Download"),
  },
  {
    id: 4,
    icon: <CodeIcon />,
    label: "Code",
    onClick: () => console.log("Code"),
  },
  {
    id: 5,
    icon: <BookOpenIcon />,
    label: "Guide",
    onClick: () => console.log("Guide"),
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Theme Toggle - Posición fija en la esquina superior derecha */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white text-gray-900 dark:bg-black dark:text-white">
        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24 pb-32">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {config.appName || "<PROJECT_Name>"}
          </h1>
          <div className="text-lg opacity-80 text-gray-700 dark:text-gray-300">
            <TextSpotlight
              textClassName="text-xl md:text-4xl font-semibold"
              text={config.appDescription || "<PROJECT_DESCRIPTION>"}
              spotlightColor="255, 255, 255"
              animateOnPhone={true}
              spotlightArea={90}
              spotlightSize={100}
            />
            
          </div>
        </section>

        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24 pb-32">
          <ButtonBasic
            title="Primary"
            onClick={() => console.log("Primary clicked")}
            typeButton={1}
            enable={true}
          />
          <ButtonBasic title="Primary Disabled" typeButton={1} enable={false} />
          <ButtonBasic
            title="Secondary"
            onClick={() => console.log("Secondary clicked")}
            typeButton={2}
            enable={true}
          />
          <ButtonBasic
            title="Tertiary"
            onClick={() => console.log("Tertiary clicked")}
            typeButton={3}
            enable={true}
          />
        </section>

        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24 pb-32">
          {/* Card Flip: Tarjeta con animación de volteo (clic en botón "Detalles") */}
          <CardFlip className="w-full max-w-md" hideDefaultButtons>
            {({ flip }) => [
              // Cara frontal de la tarjeta
              <CardFlipFront key="front">
                <CardFlipHeader>
                  <CardFlipTitle>Título Principal</CardFlipTitle>
                  <CardFlipDescription>
                    Descripción breve del contenido
                  </CardFlipDescription>
                  {/* Badge o acción en la esquina superior derecha */}
                  <CardFlipAction>
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                      Badge
                    </span>
                  </CardFlipAction>
                </CardFlipHeader>
                <CardFlipContent>
                  <div className="space-y-4">
                    {/* Imagen destacada (opcional) */}
                    <img
                      src="Ruta Foto"
                      alt="Imagen descriptiva"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {/* Información principal */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Dato 1</span>
                      <span className="text-2xl font-bold">Dato 2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Texto descriptivo adicional con más detalles.
                    </p>
                  </div>
                </CardFlipContent>
                {/* Footer con botones de acción */}
                <CardFlipFooter>
                  <div className="flex flex-col gap-2 w-full">
                    <button className="btn btn-primary w-full">
                      Acción Principal
                    </button>
                    <button onClick={flip} className="btn btn-tertiary w-full">
                      Detalles
                    </button>
                  </div>
                </CardFlipFooter>
              </CardFlipFront>,

              // Cara trasera de la tarjeta
              <CardFlipBack key="back">
                <CardFlipHeader>
                  <CardFlipTitle>Título Secundario</CardFlipTitle>
                  <CardFlipDescription>
                    Información adicional
                  </CardFlipDescription>
                </CardFlipHeader>
                <CardFlipContent>
                  {/* Lista de detalles */}
                  <div className="space-y-4 text-left">
                    <div>
                      <h4 className="font-semibold mb-1">Característica 1</h4>
                      <p className="text-sm text-muted-foreground">
                        Descripción de la característica 1
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Característica 2</h4>
                      <p className="text-sm text-muted-foreground">
                        Descripción de la característica 2
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Característica 3</h4>
                      <p className="text-sm text-muted-foreground">
                        Descripción de la característica 3
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Característica 4</h4>
                      <p className="text-sm text-muted-foreground">
                        Descripción de la característica 4
                      </p>
                    </div>
                  </div>
                </CardFlipContent>
                {/* Footer con botón para volver */}
                <CardFlipFooter>
                  <div className="flex flex-col gap-2 w-full">
                    <p className="text-xs text-muted-foreground text-center">
                      Nota o información extra al pie de la tarjeta
                    </p>
                    <button onClick={flip} className="btn btn-secondary w-full">
                      Volver
                    </button>
                  </div>
                </CardFlipFooter>
              </CardFlipBack>,
            ]}
          </CardFlip>
        </section>
      </main>
      <StylishDock 
        items={dockItems}
        baseItemSize={37.5}
        magnification={52.5}
        panelHeight={48}
      />
    </div>
  );
}
