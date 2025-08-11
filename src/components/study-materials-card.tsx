'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, FileText, GraduationCap, ClipboardList, FileQuestion, Archive, Download, Video, Headphones } from "lucide-react";
import { StudyMaterial } from "@/lib/study-data";

interface StudyMaterialsCardProps {
  subject: string;
  materials: StudyMaterial[];
}

const getMaterialIcon = (type: StudyMaterial['type']) => {
  switch (type) {
    case 'course':
      return <BookOpen className="h-4 w-4 text-blue-600" />;
    case 'exercise':
      return <FileText className="h-4 w-4 text-green-600" />;
    case 'exam':
      return <GraduationCap className="h-4 w-4 text-red-600" />;
    case 'td':
      return <ClipboardList className="h-4 w-4 text-purple-600" />;
    case 'resume':
      return <FileQuestion className="h-4 w-4 text-orange-600" />;
    case 'book':
      return <Archive className="h-4 w-4 text-indigo-600" />;
    default:
      return <FileText className="h-4 w-4 text-gray-600" />;
  }
};

const getMaterialTypeLabel = (type: StudyMaterial['type']) => {
  switch (type) {
    case 'course':
      return 'Cours';
    case 'exercise':
      return 'Exercice';
    case 'exam':
      return 'Examen';
    case 'td':
      return 'TD';
    case 'resume':
      return 'Résumé';
    case 'book':
      return 'Livre';
    default:
      return 'Document';
  }
};

const getLanguageLabel = (language: StudyMaterial['language']) => {
  switch (language) {
    case 'french':
      return '🇫🇷 Français';
    case 'english':
      return '🇬🇧 English';
    case 'both':
      return '🇫🇷🇬🇧 Bilingue';
    default:
      return '';
  }
};

const getLanguageColor = (language: StudyMaterial['language']) => {
  switch (language) {
    case 'french':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'english':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'both':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getTypeColor = (type: StudyMaterial['type']) => {
  switch (type) {
    case 'course':
      return 'bg-blue-50 border-blue-200';
    case 'exercise':
      return 'bg-green-50 border-green-200';
    case 'exam':
      return 'bg-red-50 border-red-200';
    case 'td':
      return 'bg-purple-50 border-purple-200';
    case 'resume':
      return 'bg-orange-50 border-orange-200';
    case 'book':
      return 'bg-indigo-50 border-indigo-200';
    default:
      return 'bg-gray-50 border-gray-200';
  }
};

export function StudyMaterialsCard({ subject, materials }: StudyMaterialsCardProps) {
  return (
    <Card className="w-full border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            {subject}
          </CardTitle>
          <Badge variant="secondary" className="text-sm">
            {materials.length} ressource(s)
          </Badge>
        </div>
        <CardDescription className="text-sm">
          Cliquez sur n'importe quelle ressource pour y accéder directement
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-md transition-all duration-200 hover:scale-[1.02] border ${getTypeColor(material.type)}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getMaterialIcon(material.type)}
                    <Badge variant="outline" className="text-xs font-medium">
                      {getMaterialTypeLabel(material.type)}
                    </Badge>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs font-medium border ${getLanguageColor(material.language)}`}
                  >
                    {getLanguageLabel(material.language)}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm mb-3 line-clamp-2 text-gray-800 leading-relaxed">
                  {material.title}
                </h4>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.open(material.url, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Accéder
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}