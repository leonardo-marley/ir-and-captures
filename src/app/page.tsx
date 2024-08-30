"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import TextField from '@mui/material/TextField';
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
import Fab from '@mui/material/Fab';
import LoadingButton from '@mui/lab/LoadingButton';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LayersIcon from '@mui/icons-material/Layers';
import SendIcon from '@mui/icons-material/Send';
import Loading from "./components/Loading";
import CardsDownload from "./components/CardsDownload";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#000000',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#341931',
    },
  },
});

export default function Home() {
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
  const [isClient, setIsClient] = useState(false);
  const [classificacaoDownloads, setClassificacaoDownloads] = useState('todos');
  const [plataformasDownload, setPlataformasDownload] = useState(pataformas);
  const [selectedPlataformas, setSelectedPlataformas] = useState<any[]>([]);
  const [generosDownload, setGenerosDownload] = useState(generos);
  const [selectedGeneros, setSelectedGeneros] = useState<any[]>([]);
  const [texturaDownload, setTexturaDownload] = useState(textura);
  const [selectedTextura, setSelectedTextura] = useState<any[]>([]);
  const [categoriasDownload, setCategoriasDownload] = useState(categorias);
  const [selectedCategoria, setSelectedCategoria] = useState<any[]>([]);
  const [ordenacaoDownload, setOrdenacaoDownload] = useState(ordenacao);
  const [selectedOrdenacao, setSelectedOrdenacao] = useState<any[]>([]);
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (searchParams.size === 0) {
      router.push(`${pathname}?cMenu=1`, { scroll: false })
    }

  }, [isClient, router]);

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

  if (!isClient) {
    return null;
  }

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
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', minHeight: '36px' }} onClick={() => console.log(option.label)}>
        <IconComponent style={ option.label !== 'Amps' ? { marginRight: '8px' } : { marginRight: '8px', transform: 'rotate(180deg)'}} />
        {option.label}
      </div>
    );
  };

  const cMenu = searchParams.get('cMenu');

  interface PageInnerProps {
    cMenuUrl: number;
  }

  function PageInner({ cMenuUrl }:PageInnerProps) {
    switch (cMenuUrl) {
      case 1:
        return (
          <div className={styles.containerConteudo}>
            <div className={styles.containerHome}>
              <h1>Home</h1>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.containerConteudo}>
            <div className={styles.containerDownloads}>
              <h1>{classificacaoDownloads === 'todos' ? 'Todos' : classificacaoDownloads === 'emalta' ? 'Em alta' : 'Popular'}</h1>
              <div className={styles.pageDownloads}>
                <div className={styles.sideBarDownloads}>
                  <Fab
                    onClick={() => handleClassificacaoDownload('todos')}
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
                      height: '42px'
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
                          height: '42px'
                      }}
                  >
                    <LayersIcon />
                    Todos
                  </Fab>

                  <Fab
                    onClick={() => handleClassificacaoDownload('emalta')}
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
                      height: '42px'
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
                          height: '42px'
                      }}
                  >
                    <TrendingUpIcon />
                    Em alta
                  </Fab>

                  <Fab
                    onClick={() => handleClassificacaoDownload('popular')}
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
                      height: '42px'
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
                          height: '42px'
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
                          onChange={(e) => setSelectedCategoria(e)}
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
                          onChange={(e) => setSelectedOrdenacao(e)}
                          value={selectedOrdenacao}
                          styles={customStyles}
                          components={{ DropdownIndicator }}
                        />
                      :
                        <input disabled type="text" value={`Carregando...`} />
                    }
                  </div>
                  <div className={styles.cardsDownloads}>
                    {/* <Loading
                      width={100}
                      height={100}
                    /> */}
                    <CardsDownload />
                    <CardsDownload />
                    <CardsDownload />
                    <CardsDownload />
                  </div>
                  <Stack spacing={2} >
                    <Pagination 
                      count={10} 
                      shape="rounded" 
                      size='large' 
                      sx={{
                        display: 'flex',
                        alignSelf: 'flex-end',
                        '& .Mui-selected': {
                          backgroundColor: '#9d2053',
                          color: '#fff',
                          '&:hover': {
                            backgroundColor: '#9d205380', // Cor opaca no hover
                          },
                        },
                        '& .MuiPaginationItem-root': {
                          '&:hover': {
                            backgroundColor: '#9d205380', // Hover para outros itens
                          },
                        },
                      }}
                    />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.containerConteudo}>
            <h1>Comunidade</h1>
          </div>
        );
      case 4:
        return (
          <div className={styles.containerConteudo}>
            <h1>Sobre</h1>
          </div>
        );
      case 5:
        return (
          <div className={styles.containerConteudo}>
            <div className={styles.containerContato}>
              <div className={styles.containerForm}>
                <h1 style={{marginBottom: '1rem', color: '#000000' }}>Contate-nos</h1>
                <CssTextField
                  required
                  id="outlined-required"
                  label="Nome"
                />
                <CssTextField
                  required
                  id="outlined-required"
                  label="E-mail"
                />
                <CssTextField
                  id="outlined-multiline-static"
                  label="Mensagem"
                  multiline
                  rows={5}
                />
                <LoadingButton
                  onClick={handleClick}
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                  sx={{backgroundColor: '#9d2053','&:hover': {
                    backgroundColor: '#341931',
                  }}}
                >
                  <span>Enviar</span>
                </LoadingButton>
              </div>

              <Image
                src={'/imgContato.png'}
                width={450}
                height={450}
                alt="Logo"
                className={styles.imgContato}
              />
            </div>
          </div>
        );
      default:
        return (
          <div className={styles.containerConteudo}>
            <h1>Página não encontrada</h1>
          </div>
        );
    }
  }

  return (
    <main className={styles.main} onClick={() => console.log(typeof cMenu)}>
      <Menu />
      { cMenu && <PageInner cMenuUrl={parseInt(cMenu)} />}
      <Rodape />
    </main>
  );
}
