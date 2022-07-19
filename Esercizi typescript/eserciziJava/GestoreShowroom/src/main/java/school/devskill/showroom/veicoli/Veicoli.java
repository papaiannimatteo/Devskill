package school.devskill.showroom.veicoli;

public class Veicoli {
    protected String nome;
    protected String brand;
    protected Double prezzo;
    protected Integer anno;

    public Veicoli(String nome, String brand, Double prezzo, Integer anno) {
        this.nome = nome;
        this.brand = brand;
        this.prezzo = prezzo;
        this.anno = anno;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(Double prezzo) {
        this.prezzo = prezzo;
    }

    public Integer getAnno() {
        return anno;
    }

    public void setAnno(Integer anno) {
        this.anno = anno;
    }
}
