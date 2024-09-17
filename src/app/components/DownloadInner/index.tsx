"use client";

import { useEffect, useState } from "react";
import styles from "./DownloadInner.module.css";
import { Button, styled } from "@mui/material";
import Select, { components } from 'react-select';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GradientIcon from '@mui/icons-material/Gradient';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import TollIcon from '@mui/icons-material/Toll';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import Fab from '@mui/material/Fab';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LayersIcon from '@mui/icons-material/Layers';
import Loading from "./../Loading";
import CardsDownload from "./../CardsDownload";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


interface DownloadInnerProps {
  pesquisa?: string;
}

interface SelectOption {
  label: string;
  value: number; 
}

export default function DownloadInner(props: DownloadInnerProps) {
  const pataformas: any = [
    {
      label: 'AIDA-X',
      value: 1
    },
    {
      label: 'NAM',
      value: 2
    },
    {
      label: 'PROTEUS',
      value: 3
    }
  ]

  const generos: any = [
    {
      label: 'Jazz',
      value: 1
    },
    {
      label: 'Blues',
      value: 2
    },
    {
      label: 'Rock',
      value: 3
    },
    {
      label: 'Metal',
      value: 4
    }
  ]

  const textura: any = [
    {
      label: 'Dry',
      value: 1
    },
    {
      label: 'Clean',
      value: 2
    },
    {
      label: 'Crunch',
      value: 3
    },
    {
      label: 'Fuzzy',
      value: 4
    }
  ]

  const categorias: any = [
    {
      label: 'Todas',
      value: 1
    },
    {
      label: 'Pedals',
      value: 2
    },
    {
      label: "IRs",
      value: 3
    },
    {
      label: 'Amps',
      value: 4
    }
  ]

  const ordenacao: any = [
    {
      label: 'Mais Recentes',
      value: 1
    },
    {
      label: 'Mais Antigos',
      value: 2
    }
  ]

  const cardArquivos: any = [
    {
      codigo: 1,
      dataUpload: '08/09/2024',
      loginCriador: 'start789',
      nome: 'Vintage Monster Tube Overdrive VT999',
      cCategoria: 2,
      categoriaNome: 'Pedal',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 12,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 2,
      dataUpload: '18/07/2024',
      loginCriador: 'cleitinho',
      nome: 'Vintage Monster Tube Overdrive VT999',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: '',
      cPlataforma: 0,
      genero: 2,
      textura: 3,
      qtdArquivos: 15,
      likes: 22,
      qtdDownloads: 17,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 3,
      dataUpload: '23/07/2024',
      loginCriador: 'scoob',
      nome: 'Crate GX-65 (Palmer Macht402 Power Amp)',
      cCategoria: 4,
      categoriaNome: 'Amps',
      nomePlataforma: 'PROTEUS',
      cPlataforma: 3,
      genero: 3,
      textura: 4,
      qtdArquivos: 16,
      likes: 15,
      qtdDownloads: 11,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 4,
      dataUpload: '11/09/2024',
      loginCriador: 'start789',
      nome: 'Browne Dual Protein Overdrive',
      cCategoria: 2,
      categoriaNome: 'Pedal',
      nomePlataforma: 'AIDA-X',
      cPlataforma: 1,
      genero: 1,
      textura: 2,
      qtdArquivos: 9,
      likes: 17,
      qtdDownloads: 12,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 5,
      dataUpload: '08/09/2024',
      loginCriador: 'start789',
      nome: 'Vintage Monster Tube Overdrive VT999',
      cCategoria: 2,
      categoriaNome: 'Pedal',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 6,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 7,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 8,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 9,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 10,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 11,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 12,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 13,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 14,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 15,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
  ]
  const [classificacaoDownloads, setClassificacaoDownloads] = useState('todos');
  const [plataformasDownload, setPlataformasDownload] = useState(pataformas);
  const [selectedPlataformas, setSelectedPlataformas] = useState<any[]>([]);
  const [generosDownload, setGenerosDownload] = useState(generos);
  const [selectedGeneros, setSelectedGeneros] = useState<any[]>([]);
  const [texturaDownload, setTexturaDownload] = useState(textura);
  const [selectedTextura, setSelectedTextura] = useState<any[]>([]);
  const [categoriasDownload, setCategoriasDownload] = useState(categorias);
  const [selectedCategoria, setSelectedCategoria] = useState<SelectOption>();
  const [ordenacaoDownload, setOrdenacaoDownload] = useState(ordenacao);
  const [selectedOrdenacao, setSelectedOrdenacao] = useState<SelectOption>();
  const [arquivos, setArquivos] = useState<any[]>(cardArquivos);
  const [arquivosFiltrados, setArquivosFiltrados] = useState<any>();
  const [page, setPage] = useState(1); 
  const itemsPerPage = 12;
  dayjs.extend(customParseFormat);

  useEffect(() => {
    let arquivosFiltradosTemp = [...arquivos]; 

    // Filtra pela pesquisa, se props.pesquisa existir
    if (props.pesquisa) {
      const pesquisaLower = props.pesquisa.toLowerCase();
      arquivosFiltradosTemp = arquivosFiltradosTemp.filter(
        (item) =>
          item.loginCriador?.toLowerCase().includes(pesquisaLower) ||
          item.nome?.toLowerCase().includes(pesquisaLower)
      );
    }

    // Filtra pela categoria selecionada
    if (selectedCategoria && selectedCategoria.value !== 1) {
      arquivosFiltradosTemp = arquivosFiltradosTemp.filter(
        (item) => item.cCategoria === selectedCategoria.value 
      );
    }

    // Filtra por classificação (downloads ou likes)
    if (classificacaoDownloads === 'emalta') {
      arquivosFiltradosTemp = arquivosFiltradosTemp
        .filter(item => item.qtdDownloads > 10) // Filtra os com mais de 10 downloads
        .sort((a, b) => b.qtdDownloads - a.qtdDownloads); 
    } else if (classificacaoDownloads === 'popular') {
      arquivosFiltradosTemp = arquivosFiltradosTemp
        .filter(item => item.likes > 10) // Filtra os com mais de 10 likes
        .sort((a, b) => b.likes - a.likes); 
    }

    // Verificação de ordenação
    if (selectedOrdenacao && selectedOrdenacao.value === 1) {
      arquivosFiltradosTemp.sort((a, b) => {
        const dateA = dayjs(a.dataUpload, 'DD/MM/YYYY', true); 
        const dateB = dayjs(b.dataUpload, 'DD/MM/YYYY', true); 
        if (!dateA.isValid() || !dateB.isValid()) {
          return 0;
        }
        return dateB.diff(dateA);
      });
    } else if (selectedOrdenacao && selectedOrdenacao.value === 2) {
      arquivosFiltradosTemp.sort((a, b) => {
        const dateA = dayjs(a.dataUpload, 'DD/MM/YYYY', true); 
        const dateB = dayjs(b.dataUpload, 'DD/MM/YYYY', true);
        if (!dateA.isValid() || !dateB.isValid()) {
          return 0;
        }
        return dateA.diff(dateB);
      });
    }

    setArquivosFiltrados(arquivosFiltradosTemp); 
  }, [classificacaoDownloads, arquivos, selectedCategoria, selectedOrdenacao, props.pesquisa]);

  useEffect(() => {
    if (categoriasDownload && categoriasDownload.length > 0) {
      setSelectedCategoria(categoriasDownload[0]);
    }
  }, [categoriasDownload]);

  useEffect(() => {
    if (categoriasDownload && categoriasDownload.length > 0) {
      setSelectedOrdenacao(ordenacaoDownload[0]);
    }
  }, [ordenacaoDownload]);

  function handleClassificacaoDownload(tipo:string) {
    setClassificacaoDownloads(tipo);
  }

  function onInputChangePlataforma(selectedOptions: any) {
    if (selectedOptions) {
      setSelectedPlataformas(selectedOptions);
    } else {
      setSelectedPlataformas([]); 
    }
  }

  function onInputChangeGenero(selectedOptions: any) {
    if (selectedOptions) {
      setSelectedGeneros(selectedOptions);
    } else {
      setSelectedGeneros([]); 
    }
  }

  function onInputChangeTextura(selectedOptions: any) {
    if (selectedOptions) {
      setSelectedTextura(selectedOptions);
    } else {
      setSelectedTextura([]); 
    }
  }

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <CompareArrowsIcon style={{transform: 'rotate(90deg)'}}/>
      </components.DropdownIndicator>
    );
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? '#9d2053' : provided.borderColor, 
      '&:hover': {
        borderColor: '#9d2053', 
        cursor: 'pointer'
      },
      boxShadow: state.isFocused ? '0 0 0 1px #9d2053' : 'none', 
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#9d205380' : 'white', 
      color: state.isFocused ? 'white' : 'black', 
      '&:hover': {
        backgroundColor: '#9d205380', 
      },
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#9d2053',
      color: 'white', 
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: 'white', 
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: 'white',
      '&:hover': {
        backgroundColor: '#9d2053', 
        color: 'white',
      },
    }),
  };

  const formatOptionLabel = (option: any) => {
    let IconComponent;
    switch (option.value) {
      case 1:
        IconComponent = GraphicEqIcon;
        break;
      case 2:
        IconComponent = GradientIcon;
        break;
      case 3:
        IconComponent = ShowChartIcon;
        break;
      case 4:
        IconComponent = CreditCardIcon;
        break;
      default:
        IconComponent = TollIcon;
        break;
    }
  
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', minHeight: '36px' }} >
        <IconComponent style={ option.label !== 'Amps' ? { marginRight: '8px' } : { marginRight: '8px', transform: 'rotate(180deg)'}} />
        {option.label}
      </div>
    );
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = arquivosFiltrados?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(arquivosFiltrados?.length / itemsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.containerDownloads}>
      <h1>{classificacaoDownloads === 'todos' ? 'Todos' : classificacaoDownloads === 'emalta' ? 'Em alta' : 'Popular'}</h1>
      <div className={styles.pageDownloads}>
        <div className={styles.sideBarDownloads}>
          <Fab
            onClick={() => {handleClassificacaoDownload('todos'); setPage(1);}}
            color="inherit"
            sx={ classificacaoDownloads !== 'todos' ? {'&:hover': {
              backgroundColor: '#9d2053',
              border: '1px solid #9d2053',
              color: '#fff',
              fontWeight: 600
            }, 
              fontSize: '14px', 
              fontWeight: 600, 
              gap: '1rem', 
              backgroundColor: '#fff',
              //color: '#fff',
              justifyContent: 'center',
              width: '100%',
              //border: '1px solid #9d2053',
              borderRadius: '4px',
              height: '42px',
              zIndex: 'auto'
              } : {
                '&:hover': {
                  backgroundColor: '#9d2053',
                  border: '1px solid #9d2053',
                  color: '#fff',
                  fontWeight: 600
                }, 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  gap: '1rem', 
                  backgroundColor: '#9d2053',
                  color: '#fff',
                  justifyContent: 'center',
                  width: '100%',
                  // border: '1px solid #9d2053',
                  borderRadius: '4px',
                  height: '42px',
                  zIndex: 'auto'
              }}
          >
            <LayersIcon />
            Todos
          </Fab>

          <Fab
            onClick={() => {handleClassificacaoDownload('emalta'); setPage(1);}}
            color="inherit"
            sx={ classificacaoDownloads !== 'emalta' ? {'&:hover': {
              backgroundColor: '#9d2053',
              border: '1px solid #9d2053',
              color: '#fff',
              fontWeight: 600
            }, 
              fontSize: '14px', 
              fontWeight: 600, 
              gap: '1rem', 
              backgroundColor: '#fff',
              //color: '#fff',
              justifyContent: 'center',
              width: '100%',
              //border: '1px solid #9d2053',
              borderRadius: '4px',
              height: '42px',
              zIndex: 'auto'
              } : {
                '&:hover': {
                  backgroundColor: '#9d2053',
                  border: '1px solid #9d2053',
                  color: '#fff',
                  fontWeight: 600
                }, 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  gap: '1rem', 
                  backgroundColor: '#9d2053',
                  color: '#fff',
                  justifyContent: 'center',
                  width: '100%',
                  //border: '1px solid #9d2053',
                  borderRadius: '4px',
                  height: '42px',
                  zIndex: 'auto'
              }}
          >
            <TrendingUpIcon />
            Em alta
          </Fab>

          <Fab
            onClick={() => {handleClassificacaoDownload('popular'); setPage(1);}}
            color="inherit"
            sx={ classificacaoDownloads !== 'popular' ? {'&:hover': {
              backgroundColor: '#9d2053',
              border: '1px solid #9d2053',
              color: '#fff',
              fontWeight: 600
            }, 
              fontSize: '14px', 
              fontWeight: 600, 
              gap: '1rem', 
              backgroundColor: '#fff',
              //color: '#fff',
              justifyContent: 'center',
              width: '100%',
              //border: '1px solid #9d2053',
              borderRadius: '4px',
              height: '42px',
              zIndex: 'auto'
              } : {
                '&:hover': {
                  backgroundColor: '#9d2053',
                  border: '1px solid #9d2053',
                  color: '#fff',
                  fontWeight: 600
                }, 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  gap: '1rem', 
                  backgroundColor: '#9d2053',
                  color: '#fff',
                  justifyContent: 'center',
                  width: '100%',
                  //border: '1px solid #9d2053',
                  borderRadius: '4px',
                  height: '42px',
                  zIndex: 'auto'
              }}
          >
            <ThumbUpAltIcon />
            Popular
          </Fab>

          <hr 
            style={{
              color:'#ccc',
              background: '#ccc',
              outline: 'none',
              height: '1px',
              border: 'none',
            }}
          />

          <p 
            style={{
              alignItems: 'center', 
              gap: '.5rem', 
              display: 'flex', 
              width: '100%', 
              justifyContent: 'center',
              fontWeight: 600
            }}
          ><FilterAltIcon /> Filtro</p>

          {
            plataformasDownload ?
              <Select
                className={styles.select} 
                isLoading={!plataformasDownload}  
                isClearable
                isMulti
                isSearchable
                options={plataformasDownload}
                placeholder='Plataforma...'
                onChange={onInputChangePlataforma}
                value={selectedPlataformas}
                styles={customStyles}
              />
            :
              <input disabled type="text" value={`Carregando...`} />
          }

          {
            generosDownload ?
              <Select
                className={styles.select} 
                isLoading={!generosDownload}  
                isClearable
                isMulti
                isSearchable
                options={generosDownload}
                placeholder='Gênero...'
                onChange={onInputChangeGenero}
                value={selectedGeneros}
                styles={customStyles}
              />
            :
              <input disabled type="text" value={`Carregando...`} />
          }

          {
            texturaDownload ?
              <Select
                className={styles.select} 
                isLoading={!texturaDownload}  
                isClearable
                isMulti
                isSearchable
                options={texturaDownload}
                placeholder='Textura...'
                onChange={onInputChangeTextura}
                value={selectedTextura}
                styles={customStyles}
              />
            :
              <input disabled type="text" value={`Carregando...`} />
          }

          <Button
            //onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{'&:hover': {
              backgroundColor: '#9d2053',
              border: '1px solid #9d2053',
              color: '#fff'
            }, 
              fontSize: '14px', 
              fontWeight: 600, 
              gap: '.5rem', 
              backgroundColor: '#fff',
              color: '#9d2053',
              border: '1px solid #9d2053'
              }}
          >
            Filtrar
          </Button>

        </div>
        <div className={styles.downloads} >
          <div className={styles.topBarDownloads}>
            {
              categoriasDownload ?
                <Select
                  className={styles.select} 
                  isLoading={!categoriasDownload}  
                  isClearable
                  isSearchable
                  options={categoriasDownload}
                  onChange={(e) => {setSelectedCategoria(e); setPage(1);}}
                  defaultValue={categoriasDownload[0]}
                  value={selectedCategoria}
                  styles={customStyles}
                  formatOptionLabel={formatOptionLabel}
                />
              :
                <input disabled type="text" value={`Carregando...`} />
            }
            {
              ordenacaoDownload ?
                <Select
                  className={styles.select} 
                  isLoading={!ordenacaoDownload}  
                  options={ordenacaoDownload}
                  onChange={(e:any) => {setSelectedOrdenacao(e); setPage(1);}}
                  value={selectedOrdenacao}
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                />
              :
                <input disabled type="text" value={`Carregando...`} />
            }
          </div>

          { props.pesquisa &&
            <p style={{marginTop: '1rem', fontSize: 'medium'}}>Resultado de pesquisa por: <b>{props.pesquisa}</b></p>
          }

          <div className={styles.cardsDownloads} 
            style={currentItems?.length === 0 ?{
              display: 'flex',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              textWrap: 'nowrap'
            }:{}}
          >
            { currentItems?.length > 0 ?
              currentItems.map((item:any) => (
                <CardsDownload
                  key={item.codigo}
                  codigo={item.codigo}
                  dataUpload={item.dataUpload}
                  loginCriador={item.loginCriador}
                  nome={item.nome}
                  cCategoria={item.cCategoria}
                  categoriaNome={item.categoriaNome}
                  nomePlataforma={item.nomePlataforma}
                  cPlataforma={item.cPlataforma}
                  genero={item.genero}
                  textura={item.textura}
                  qtdArquivos={item.qtdArquivos}
                  likes={item.likes}
                  qtdDownloads={item.qtdDownloads}
                />
              ))
              : (props.pesquisa) ?
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center'
                  }}
                >
                  <SearchOffIcon sx={{fontSize: "8rem"}}/>
                  <h4>Desculpe, não encontamos nenhum resultado.</h4>
                </div>
                :
                  <Loading
                    width={100}
                    height={100}
                  />
            }
          </div>
          <Stack spacing={2} >
            <Pagination 
              count={totalPages} 
              page={page} 
              onChange={handlePageChange} 
              shape="rounded" 
              size='large' 
              sx={{
                display: 'flex',
                alignSelf: 'flex-end',
                '& .Mui-selected': {
                  backgroundColor: '#9d2053 !important',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#9d205380', 
                  },
                },
                '& .MuiPaginationItem-root': {
                  '&:hover': {
                    backgroundColor: '#9d205380', 
                  },
                },
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}